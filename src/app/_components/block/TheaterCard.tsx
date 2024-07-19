import {
	Card,
	CardBody,
	CardHeader,
	Heading,
	Image,
	Text,
	VStack,
} from '@yamada-ui/react';
import React from 'react';

interface theaterType {
	theaterImage: string;
	theaterName: string;
	theaterInformation: string;
}

const TheaterCard = ({
	theaterImage,
	theaterName,
	theaterInformation,
}: theaterType) => {
	return (
		<>
			<Card
				direction={{ base: 'row', md: 'column' }}
				overflow="hidden"
				variant="outline"
				cursor="pointer"
				borderRadius="2px"
				m="15px auto 0 auto"
				w={{ base: '100%', md: '90%' }}
				h={{ base: '200px', md: 'fit-content' }}
				sx={{
					'&:hover .goTheaterPage': {
						textDecoration: 'underline',
					},
				}}
			>
				<Image
					src={theaterImage}
					objectFit="cover"
					maxW={{ base: '30%', md: '100%' }}
					alt="theaterName"
				/>

				<VStack gap="0">
					<CardHeader
						display="center"
						justifyContent="space-between"
						alignItems="center"
					>
						<Heading size="md">{theaterName}</Heading>
						<Heading
							className="goTheaterPage"
							size="sm"
							color="secondary"
						>{`劇場を見る >`}</Heading>
					</CardHeader>

					<CardBody>
						<Text wordBreak="break-all" lineClamp={5}>
							{theaterInformation}
						</Text>
					</CardBody>
				</VStack>
			</Card>
		</>
	);
};

export default TheaterCard;
