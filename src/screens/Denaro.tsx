import React, {useLayoutEffect} from 'react';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks/';
import {Block, Button, Input, Image, Text} from '../components/';

// buttons example
const Buttons = () => {
  const {gradients, sizes} = useTheme();
  const navigation = useNavigation();

  return (
    <Block paddingHorizontal={sizes.padding}>
      <Block>
        <Button flex={1} gradient={gradients.dark} marginBottom={sizes.base} >
          <Text white bold transform="uppercase">
           Please select your Dinero ?
          </Text>
        </Button>
        <Input placeholder="Regular" marginBottom={sizes.sm} multiline={true} />
        <Button flex={1} gradient={gradients.dark} marginBottom={sizes.base}>
          <Text white bold transform="uppercase">
            Choose a goal frequency ?
          </Text>
        </Button>
        <Block>
          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}
			onPress={() => navigation.navigate('Home')}
			>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              DeleteDelete DeleteDelete
            </Text>
          </Button>
          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}			
			onPress={() => navigation.navigate('Home')}
			>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              DeleteDelete DeleteDelete
            </Text>
          </Button>
          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}			
			onPress={() => navigation.navigate('Home')}
>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              DeleteDelete DeleteDelete
            </Text>
          </Button>

          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}
			onPress={() => navigation.navigate('Home')}
			>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              Delete
            </Text>
          </Button>
          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              DeleteDelete DeleteDelete
            </Text>
          </Button>
          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              DeleteDelete DeleteDelete
            </Text>
          </Button>
          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              DeleteDelete DeleteDelete
            </Text>
          </Button>

          <Button
            flex={1}
            gradient={gradients.info}
            marginHorizontal={sizes.s}
            padding={5}>
            <Text white bold transform="uppercase" marginHorizontal={sizes.s}>
              Delete
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

// texts example

const Denaro = () => {
  const {assets, sizes} = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <Image
          radius={0}
          resizeMode="cover"
          width={sizes.width}
          height={headerHeight}
          source={assets.header}
        />
      ),
    });
  }, [assets.header, navigation, sizes.width, headerHeight]);

  return (
    <Block safe>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Buttons />
        </Block>
      </Block>
    </Block>
  );
};

export default Denaro;
