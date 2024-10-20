import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
	width: 100%;
	height: 590px;
	display: flex;
	background: #343434;
	background-size: cover;
`;

export default function Footer() {
	const authMember = null;

	return (
		<Footers>
			<Container>
				<Stack flexDirection={"row"} sx={{ mt: "94px" }}>
					<Stack flexDirection={"column"} style={{ width: "340px" }}>
						<Box className={"foot-desc-txt"}>
							We give you hot and delicious taste and mood. Mom's Touch is your
							best choice Brand of your options. Mom's Touch is always with you.
						</Box>
						<Box className="sns-context">
							<img src={"/icons/facebook.svg"} />
							<img src={"/icons/twitter.svg"} />
							<img src={"/icons/instagram.svg"} />
							<img src={"/icons/youtube.svg"} />
						</Box>
					</Stack>
					<Stack sx={{ ml: "288px" }} flexDirection={"row"}>
						<Stack>
							<Box>
								<Box className={"foot-category-title"}>Menu </Box>
								<Box className={"foot-category-link"}>
									<Link to="/">Home</Link>
									<Link to="/products">Products</Link>
									{authMember && <Link to="/orders">Orders</Link>}
									<Link to="/help">Help</Link>
								</Box>
							</Box>
						</Stack>
						<Stack sx={{ ml: "100px" }}>
							<Box>
								<Box className={"foot-category-title"}>Find us</Box>
								<Box
									flexDirection={"column"}
									sx={{ mt: "20px" }}
									className={"foot-category-link"}
									justifyContent={"space-between"}
								>
									<Box flexDirection={"row"} className={"find-us"}>
										<span>Location.</span>
										<div>Anywhere, South Korea </div>
									</Box>
									<Box className={"find-us"}>
										<span>Phone.</span>
										<div>+82-2-6160-8982</div>
									</Box>
									<Box className={"find-us"}>
										<span>website.</span>
										<div>http://www.momstouch.co.kr/</div>
									</Box>
									<Box className={"find-us"}>
										<span>Hour.</span>
										<div>Visit 24 hours</div>
									</Box>
								</Box>
							</Box>
						</Stack>
					</Stack>
				</Stack>
				<Stack
					style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
					sx={{ mt: "80px" }}
				></Stack>
				<Stack className={"copyright-txt"}>
					Mom's Touch is licensed under this website
				</Stack>
			</Container>
		</Footers>
	);
}
