import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import ui_button from './ui-button'

// melbourne.ui-helper/HelperControl [12] 
function HelperControl({
  design,
  variant,
  theme,
  style,
  styleContainer,
  leftDisabled,
  rightDisabled,
  children,
  onLeft,
  onRight,
  iconProps = {},
  leftProps = {},
  rightProps = {}
}){
  return (
    <n.Row style={styleContainer}>
      <ui_button.Button
        text={(
          <RNIcon key="left" name="chevron-small-left" size={15} {...iconProps}></RNIcon>)}
        disabled={leftDisabled}
        indicatorParams={{"pressing":{"default":{"duration":50}}}}
        onPress={onLeft}
        style={[
          {"paddingVertical":5},
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        design={design}
        variant={variant}
        theme={theme}
        {...leftProps}>
      </ui_button.Button>
      {children || (
        <ReactNative.View style={{"width":3}}></ReactNative.View>)}
      <ui_button.Button
        text={(
          <RNIcon
            key="right"
            name="chevron-small-right"
            size={15}
            {...iconProps}>
          </RNIcon>)}
        disabled={rightDisabled}
        indicatorParams={{"pressing":{"default":{"duration":50}}}}
        onPress={onRight}
        style={[
          {"paddingVertical":5},
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        design={design}
        variant={variant}
        theme={theme}
        {...rightProps}>
      </ui_button.Button>
    </n.Row>);
}

var MODULE = {"HelperControl":HelperControl};

export default MODULE