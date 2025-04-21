import React from 'react';

import { HeaderButton } from 'react-navigation-header-buttons';

import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

type HeaderButtonProps = {
  title: string;
  onPress: () => void;
};

const HeaderButton = (props: HeaderButtonProps) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : 'black'}
    />
  );
};

export default HeaderButton;
