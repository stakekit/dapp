import { Box } from "../components/atoms/box";
import { FluidContainer } from "./fluid";
import { Header } from "./header";
import { container } from "./style.css";
import { HelpModals, Widget } from "./widget";

export default function Home() {
  return (
    <Box className={container}>
      <FluidContainer />
      <Header />
      <Widget />
      <Box marginTop={{ tablet: "0", mobile: "8" }}>
        <HelpModals />
      </Box>
    </Box>
  );
}
