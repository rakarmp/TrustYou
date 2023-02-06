import HandleWait from "@/components/loading";
import { Center, Heading, Avatar, AvatarGroup } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  if (loading) {
    return <HandleWait />;
  }

  return (
    <div>
      <Center py={5}>
        <Heading as="h3" size="md">
          Author By{" "}
        </Heading>
      </Center>
      <Center py={5}>
        <AvatarGroup size="md" max={2}>
          <Avatar
            name="imadatyatalah"
            src="https://avatars.githubusercontent.com/u/70093484?s=64&v=4"
          />
          <Avatar
            name="grizz12"
            src="https://avatars.githubusercontent.com/u/83684256?s=64&v=4"
          />
          <Avatar
            name="Dependabot[BOT]"
            src="https://avatars.githubusercontent.com/in/29110?s=64&v=4"
          />
          <Avatar
            name="ImgBotApp"
            src="https://avatars.githubusercontent.com/u/31427850?s=64&v=4"
          />
        </AvatarGroup>
      </Center>
    </div>
  );
}
