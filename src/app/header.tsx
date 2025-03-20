import Image from "next/image";
import { Box } from "../components/atoms/box";
import { Divider } from "../components/atoms/divider";
import { GHIcon } from "../components/atoms/icons/gh";
import { Text } from "../components/atoms/typography";
import Logo from "./sk-horizontal-darkmode.svg";
import { connectContainer, dividerContainer, logo } from "./style.css";

export const Header = () => {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			py="2"
			px={{ mobile: "1", tablet: "8" }}
		>
			<Box
				as="a"
				href="/"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Image src={Logo} alt="logo" className={logo} priority />
			</Box>

			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				gap="3"
				className={connectContainer}
			>
				<Box
					display="flex"
					as="a"
					href="https://twitter.com/stakekit"
					target="_blank"
				>
					<Text>𝕏</Text>
				</Box>

				<Box className={dividerContainer}>
					<Divider />
				</Box>

				<Box
					display="flex"
					as="a"
					href="https://github.com/stakekit/"
					target="_blank"
				>
					<GHIcon />
				</Box>
			</Box>
		</Box>
	);
};
