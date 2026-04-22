import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="l" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="12" variant="heading-strong-xl" align="center">
        {blog.title}
      </Heading>
      <Text variant="body-default-m" onBackground="neutral-weak" align="center" marginBottom="32">
        {blog.description}
      </Text>
      <Column fillWidth flex={1} gap="24">
        <Posts
          columns="2"
          thumbnail
          direction="column"
          exclude={[
            "seo",
            "work",
            "quick-start",
            "password",
            "styling",
            "pages",
            "mailchimp",
            "components",
            "content",
            "localization",
            "blog",
          ]}
        />
      </Column>
    </Column>
  );
}
