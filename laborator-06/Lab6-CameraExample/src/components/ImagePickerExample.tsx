import * as React from 'react';
import { useState } from 'react';
import {  View, Button , Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const ImagePickerExample : React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, margin: 30 }} />}
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
    );
};

export default ImagePickerExample;

