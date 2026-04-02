import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

type SocialLinkTypeObject<N extends string, L extends string> = {
	type: N;
	link: L;
};

export type SocialLink =
	| SocialLinkTypeObject<"Facebook", `https://facebook.com/${string}`>
	| SocialLinkTypeObject<"Instagram", `https://instagram.com/${string}`>
	| SocialLinkTypeObject<"X", `https://x.com/${string}`>
	| SocialLinkTypeObject<"GitHub", `https://github.com/${string}`>
	| SocialLinkTypeObject<"YouTube", `https://youtube.com/${string}`>
	| SocialLinkTypeObject<"WhatsApp", `https://wa.me/${string}`>
	| SocialLinkTypeObject<"Email", `mailto:${string}`>
	| SocialLinkTypeObject<"Bluesky", `https://bsky.app/${string}`>;

export interface SocialLinkModelView extends WidgetComponentModelView {
	socialLink: SocialLink;
}

export type SocialLinkModel = ReadonlyModel<SocialLinkModelView>;
