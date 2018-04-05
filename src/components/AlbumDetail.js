import React from 'react';
import { Image, Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ( { album } ) => {
	const {title, artist, thumbnail_image, image, url} = album;
	const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image }}/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={imageStyle} source={{uri : image}}/>
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy now
				</Button>
			</CardSection>
		</Card>
	);
}

const styles = {
	thumbnailStyle: {
		width: 50,
		height: 50
	},

	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},

	headerTextStyle: {
		fontSize: 18
	},

	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
		marginLeft: 10 
	},

	imageStyle: {
		height: 300,
		width: null,
		flex: 1
	}
};

export default AlbumDetail;