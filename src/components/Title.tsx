import {StyleSheet, Text, useWindowDimensions} from 'react-native';
interface TitleProps {
  title: string;
}
export const TitleComponets = ({title}: TitleProps) => {
  const {height} = useWindowDimensions();
  // console.log(props)
  return <Text style={{height: height * 0.12, ...style.tile}}>{title}</Text>;
};

const style = StyleSheet.create({
  tile: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
