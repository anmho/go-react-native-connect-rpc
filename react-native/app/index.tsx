import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { createClient, Code, ConnectError } from '@connectrpc/connect';
import { createXHRGrpcWebTransport } from './custom-transport';

// Needed to polyfill TextEncoder/ TextDecoder
import 'fast-text-encoding';
import { create } from '@bufbuild/protobuf';
import { polyfills } from './polyfills';
import { HappenedService } from '../gen/protos/protos/v1/happened_service_pb';

polyfills();
// Make the Eliza Service client
const client = createClient(
  HappenedService,
  createXHRGrpcWebTransport({
    baseUrl: 'http://localhost:8080',
  })
);

function Index() {
  const [greeting, setGreeting] = useState<string | null>();

  useEffect(() => {
    (async () => {
      const response = await client.greet({ name: 'hello' });
      console.log(response);
      setGreeting(response.greeting);

      try {
        const errorResponse = await client.greet({ name: '' });
        console.log(errorResponse);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <ScrollView style={styles.app}>
      <View style={styles.appHeader}>
        <Text style={styles.h1}>Eliza</Text>
        <Text style={styles.h4}>React Native</Text>
      </View>
      <View style={styles.container}>
        <Text>Greeting{greeting}</Text>
      </View>
    </ScrollView>
  );
}

export default Index;

const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  h4: {
    marginTop: 0,
    marginHorizontal: 0,
    marginBottom: 15,
    color: '#161ede',
  },
  app: {
    backgroundColor: '#fafafa',
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    marginVertical: 0,
    marginHorizontal: 'auto',
    maxWidth: 1320,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderLeftColor: '#ebebeb',
    borderRightColor: '#ebebeb',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    minHeight: Dimensions.get('window').height,
  },
  appHeader: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#000',
    backgroundColor: '#fff',
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
  },
  elizaRespContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    borderWidth: 2,
    borderColor: '#ebebeb',
    borderRadius: 28,
    marginVertical: 5,
  },
  respText: {
    fontSize: 18,
    margin: 5,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    color: '#09083a',
    borderRadius: 28,
    overflow: 'hidden',
  },
  elizaRespText: {
    color: '#090a3a',
  },
  userRespContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right',
    borderRadius: 28,
    borderWidth: 0,
  },
  userRespText: {
    color: '#165fed',
    backgroundColor: '#e0edff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ebebeb',
    padding: 10,
    marginVertical: 5,
  },
});
