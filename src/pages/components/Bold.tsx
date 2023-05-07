import { Text } from "@nextui-org/react";

interface Props {
    children?: React.ReactNode; 
    TextColor: string;
}

export default function Bold(props: Props) {
  return (
    <>
     <Text color={props.TextColor} b>{props.children}</Text>
    </>
  )
}
