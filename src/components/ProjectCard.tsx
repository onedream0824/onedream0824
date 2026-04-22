"use client";

import {
  AvatarGroup,
  Card,
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
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
      border="neutral-alpha-weak"
      background="surface"
      radius="l-4"
      padding="8"
      transition="micro-medium"
    >
      <Flex s={{ direction: "column" }} m={{ direction: "row" }} gap="24" fillWidth>
        {images?.length > 0 && (
          <Flex flex={6}>
            <Media
              priority={priority}
              sizes="(max-width: 768px) 100vw, 560px"
              aspectRatio="16 / 9"
              radius="l"
              border="neutral-alpha-weak"
              alt={title}
              src={images[0]}
            />
          </Flex>
        )}
        <Column flex={4} gap="16" paddingX="s" paddingY="xs" vertical="center">
          {title && (
            <Heading as="h2" wrap="balance" variant="heading-strong-l">
              {title}
            </Heading>
          )}
          {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
          {role?.trim() && (
            <Text variant="label-default-s" onBackground="brand-weak">
              Role: {role}
            </Text>
          )}
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          {skillsets.length > 0 && (
            <Text wrap="balance" variant="label-default-s" onBackground="neutral-weak">
              Skillsets: {skillsets.join(" | ")}
            </Text>
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
