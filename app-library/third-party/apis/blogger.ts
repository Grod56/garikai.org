type BlogPostsEndpointURL =
	`https://www.googleapis.com/blogger/v3/blogs/${bigint}/posts?fetchImages=true`;

type BloggerBlogPostItem = {
	id: string;
	title: string;
	author: {
		displayName: string;
	};
	published: string;
	content: string;
	url: string;
	images: {
		url: string;
	}[];
};

function createBloggerClient(blogPostsEndpointURL: BlogPostsEndpointURL) {
	return {
		async fetchBlogPosts() {
			const data: BloggerBlogPostItem[] = await fetch(
				blogPostsEndpointURL,
				{
					headers: { "Content-Type": "application/json" },
				},
			)
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						return Promise.reject();
					}
				})
				.then(responseJSON => {
					return responseJSON.items;
				})
				.catch(() => {
					return null;
				});
			return { data };
		},
	};
}

export default createBloggerClient(
	process.env.BLOGGER_POSTS_ENDPOINT_URL! as BlogPostsEndpointURL,
);
