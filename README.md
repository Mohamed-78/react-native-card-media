# react-native-card-media

![npm version](https://img.shields.io/npm/v/react-native-card-media.svg)
![license](https://img.shields.io/npm/l/react-native-card-media.svg)
[![npm](https://img.shields.io/npm/dt/react-card-media-element.svg)](https://www.npmjs.com/package/react-card-media-element)

A simple React Native component for displaying a card.

## Installation

```bash
npm install react-native-card-media
```

## Usage

Import the Card component into the part where you want to use it.

Example :

```jsx
import React from 'react';
import { View } from 'react-native';
import CardMedia from 'react-native-card-media';

const App = () => {
  return (
    <View>
      <CardMedia />
    </View>
  );
};
export default App;
```
## Styles

You can also customize the appearance of the component by using the available properties.

First example :
```jsx
<CardMedia 
    image={'https://placehold.co/500x500/png'}
    title={"Card title"}
    subtitle={"subtitle"}
    description={"Lorem ipsum dolor sit amet, consectetur adip"} 
/>
```

Second example :
```jsx
<CardMedia 
    image={require('./images/example.jpg')} 
    title="Titre" 
    subtitle="Sous-titre" 
    description="Description" />
```

If you want to pass add image with url, dont't specify uri, use that like in first example

## Customize
You can customize font size of title, subtitle, and description with this differents elements below:
titleFontSize for title
subtitleFontSize for subtitle
descriptionFontSize for description
```jsx
<CardMedia 
    image={'https://placehold.co/500x500/png'}
    title={"Card title"}
    subtitle={"subtitle"}
    description={"Lorem ipsum dolor sit amet, consectetur adip"}
    titleFontSize={40}
    subtitleFontSize={20}
    descriptionFontSize={20}
/>
```

## List of Customization Properties
```txt
description, 
title, 
subtitle, 
titleFontSize, 
subtitleFontSize, 
descriptionFontSize,
width, 
height, 
image