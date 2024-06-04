import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, DownloadSimple } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

 

const ImageView = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;

    const images = item.images.map((image) => ({ url: image }));

  
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <TouchableOpacity
                style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
                onPress={() => navigation.goBack()}
            >
                <ArrowLeft weight='bold' size={32} color="#fff" />
            </TouchableOpacity>
            <ImageViewer
                imageUrls={images}
                enableSwipeDown={true}
                onSwipeDown={() => navigation.goBack()}
                renderIndicator={() => null}
                backgroundColor='#000'
                saveToLocalByLongPress={false}
                onLongPress={true}
            />
            <TouchableOpacity
                style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
                onPress={() => saveImageToDevice(images[0].url)}
            >
                <DownloadSimple weight='bold' size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default ImageView;
