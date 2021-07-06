import "./styles.css";
import NextJsLink from "next/link";
import { Link as LinkUi } from "@material-ui/core";
import styled from "@emotion/styled";

export function Link(props) {
  // regex to check for exactly one leading slash

  const isInternal = /^\/(?!\/)/.test(props.href);

  const Link = <LinkUi {...props}>{props.children}</LinkUi>;

  // if it's an internal link wrap it with a next link

  if (isInternal) {
    console.log("isInternal", isInternal, props.href);
    return <NextJsLink href={props.href}>{Link}</NextJsLink>;
  }

  // if not just return a normal link

  return Link;
}

const LinkStyled = styled(Link)`
  background-color: red;
`;

export default function App() {
  return (
    <div className="App">
      <Link href="http://www.google.com">External Link</Link>
      <br />
      <Link href="/about-us/">Internal Link</Link>
      <br />
      <LinkStyled href="/about-us-styled/">Internal Link</LinkStyled>
      <br />
      <LinkStyled href="/about-us/">Internal Link</LinkStyled>
    </div>
  );
}
