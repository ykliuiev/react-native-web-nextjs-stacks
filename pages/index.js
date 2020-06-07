import { StyleSheet, Text, View } from 'react-native';
import { Box } from '@mobily/stacks';

// dynamic import works correctly
// import dynamic from 'next/dynamic';
// const Box = dynamic(
//   () => import('@mobily/stacks').then((mod) => mod.Box),
//   {
//     ssr: false,
//   },
// );

export default function App(props) {
  return (
    <Box flex="fluid" alignX="center" alignY={['center', 'top']}>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js
      </Text>
      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Should be at the top on initial render
        </Text>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
});
