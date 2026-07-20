FROM node:lts-slim AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    if [ -f package-lock.json ]; then \
        npm ci --no-audit --no-fund; \
    else \
        echo "No lockfile found" && exit 1; \
    fi

FROM node:lts-slim AS build
ARG BLOG_URL=https://acme.com/blog
ARG PORTFOLIO_URL=https://acme.com/portfolio
ARG HEADER_TITLE=Title
ARG HEADER_SUBTITLE=Subtitle
ARG COPYRIGHT_TEXT="All Rights Reserved"
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BLOG_URL=${BLOG_URL}
ENV NEXT_PUBLIC_PORTFOLIO_URL=${PORTFOLIO_URL}
ENV HEADER_TITLE=${HEADER_TITLE}
ENV HEADER_SUBTITLE=${HEADER_SUBTITLE}
ENV COPYRIGHT_TEXT=${COPYRIGHT_TEXT}
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN --mount=type=secret,id=supabaseAnonKey,env=NEXT_PUBLIC_SUPABASE_ANON_KEY \
    --mount=type=secret,id=supabaseUrl,env=NEXT_PUBLIC_SUPABASE_URL \
    if [ -f package-lock.json ]; then \
        npm run build; \
    else \
        echo "No lockfile found" && exit 1; \
    fi

FROM node:lts-slim AS runner
ARG PORT=3000
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=${PORT}
WORKDIR /app
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
USER node
EXPOSE ${PORT}

CMD ["node", "server.js"]
