import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
// component
import { PublicViewOfProperties } from './PublicViewOfProperties';

// redux
import { getAllFetchProperties } from '../../redux/actions/property';
import { Box, Center, Flex, Grid, Heading } from '@chakra-ui/layout';

const PER_PAGE = 6;

export function PropertiesCollection() {
	const [ currentPage, setCurrentPage ] = useState(0);
	const dispatch = useDispatch();
	const { property: { all_properties_for_clients } } = useSelector((state) => state);

	console.log(all_properties_for_clients.data);
	useEffect(
		() => {
			dispatch(getAllFetchProperties());
		},
		[ dispatch ]
	);

	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}

	const offset = currentPage * PER_PAGE;

	const currentPageData = all_properties_for_clients.data
		.slice(offset, offset + PER_PAGE)
		.map(() => <PublicViewOfProperties />);

	const pageCount = Math.ceil(all_properties_for_clients.data.length / PER_PAGE);

	return (
		<Grid w="95%" m="auto" h="calc(100vh - 83px)" gridTemplateRow="1fr 1fr" gridTemplateColumns="1fr 1fr">
			<Box gridRowStart="1" gridRowEnd="3" w="100%" justifySelf="center" padding="0em 2em">
				<Box w="100%" h="calc(100vh - 220px)" justifySelf="center" />
			</Box>
			<Box h="150px" rowSpan="auto" borderBottomLeftRadius="20px" borderBottomRightRadius="20px">
				<Heading fontSize="2em">104 Result in texas, united states</Heading>
			</Box>
			<Box gridColumnStart="2" alignSelf="end">
				<Flex h="100%" w="100%" justifyContent="right">
					<Center>
						<ReactPaginate
							previousLabel={'←'}
							nextLabel={'→'}
							pageCount={pageCount}
							onPageChange={handlePageClick}
							pageClassName={'link'}
							containerClassName={'pagination'}
							previousLinkClassName={'pagination__link'}
							nextLinkClassName={'pagination__link'}
							disabledClassName={'pagination__link--disabled'}
							activeClassName={'pagination__link--active'}
						/>
					</Center>
				</Flex>
				<Box>
					<Grid
						w="100%"
						h="100%"
						minH="660px"
						borderTopLeftRadius="20px"
						borderTopRightRadius="20px"
						gridTemplateRows="repeat(auto)"
						gridTemplateColumns="repeat(auto-fit, 240px)
                    "
						gap="10px"
						bg="#F7F7F7"
						padding="1em"
					>
						{currentPageData}
					</Grid>
				</Box>
			</Box>
		</Grid>
	);
}
