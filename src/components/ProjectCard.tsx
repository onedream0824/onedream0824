"use client";

import {
  AvatarGroup,
  Card,
  Carousel,
  Column,
  Flex,
  Heading,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  role?: string;
  skillsets?: string[];
  avatars: { src: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority = false,
  images = [],
  title,
  content,
  description,
  role,
  skillsets = [],
  avatars,
}) => {
  return (
    <Card
      fillWidth
      border="neutral-alpha-medium"
      background="surface"
      radius="l-4"
      padding="12"
      transition="micro-medium"
    >
      <Flex s={{ direction: "column" }} m={{ direction: "row" }} gap="20" fillWidth>
        {images?.length > 0 && (
          <Flex flex={6}>
            <Carousel
              priority={priority}
              controls={images.length > 1}
              indicator={images.length > 1 ? "line" : false}
              play={{
                auto: images.length > 1,
                interval: 3500,
                controls: images.length > 1,
                progress: false,
              }}
              items={images.map((image) => ({
                slide: image,
                alt: title,
              }))}
              sizes="(max-width: 768px) 100vw, 680px"
              aspectRatio="16 / 9"
              radius="l"
              border="neutral-alpha-weak"
            />
          </Flex>
        )}
        <Column flex={4} gap="12" paddingX="xs" paddingY="xs" vertical="center">
          {title && (
            <Heading as="h2" wrap="balance" variant="heading-strong-m">
              {title}
            </Heading>
          )}
          <Row gap="8" wrap vertical="center">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {role?.trim() && <Tag size="l">Role: {role}</Tag>}
          </Row>
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          {skillsets.length > 0 && (
            <Row wrap gap="8" paddingTop="4">
              {skillsets.slice(0, 8).map((skillset) => (
                <Tag key={`${title}-${skillset}`} size="l">
                  {skillset}
                </Tag>
              ))}
            </Row>
          )}
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-s">Read case study</Text>
            </SmartLink>
          )}
        </Column>
      </Flex>
    </Card>
  );
};
