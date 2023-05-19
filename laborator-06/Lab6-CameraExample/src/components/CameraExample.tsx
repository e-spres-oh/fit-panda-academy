  import React, { useState, useEffect } from 'react';
  import { StyleSheet ,Text, View, Button, Image} from 'react-native';
  import { Camera, CameraCapturedPicture, CameraType, PermissionStatus } from 'expo-camera';

  const CameraExample : React.FC =() => {

    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [camera, setCamera] = useState<Camera | null>(null);
    const [image, setImage] = useState<CameraCapturedPicture | null>(null);
    const [type, setType] = useState(Camera.Constants.Type = CameraType.back);

    const uploadImage=()=>{
      console.log("upload camera")
    }
    
    useEffect(() => {
      (async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync()
        setHasCameraPermission(cameraStatus.status === PermissionStatus.GRANTED);
      })();}, []);

 
  const takePicture = async () => { 
      if(camera){
          const data = await camera.takePictureAsync()
          setImage(data);
      }
    }

    //If the object is null the app only renders a empty View
    if (hasCameraPermission === null) {
      return <View />;
    }

    //If the user hasn't granted permission for camera a text message is shown
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    //In this UI we show the camera view and two buttons
    //Once a picture is taken it is rendered below the two buttons
    return (
    <View style={{ flex: 1}}>
        <View style={styles.cameraContainer}>
              <Camera 
              ref={ref => setCamera(ref)}
              style={styles.fixedRatio} 
              type={type}
              ratio={'1:1'} />
        </View>
        <Button
        title='Flip Image' 
        onPress={()=>{setType(type === CameraType.front
                ? CameraType.back
                : CameraType.front)}}/>
        <Button title="Take Picture" onPress={() => takePicture()} />
          {image && <Image source={{uri: image.uri}} style={{flex:1}}/>}
          {image && <Button title='Upload image' onPress={uploadImage}></Button>}
    </View>
    );


  }


  const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: 1
    }
  })

  export default CameraExample