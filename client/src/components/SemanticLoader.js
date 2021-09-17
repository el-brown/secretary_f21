import { Image, Loader, Segment } from "semantic-ui-react";

const SemanticLoader = () => {
  return (
    <Segment inverted>
    <Loader active inverted />
    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
  )
  };

  export default SemanticLoader;