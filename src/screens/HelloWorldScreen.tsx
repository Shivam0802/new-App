import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { saveDataToBackend } from '../services/api';

export function HelloWorldScreen() {
  const [status, setStatus] = useState<string>('');

  const handleSave = async () => {
    try {
      setStatus('Saving...');
      const payload = {
        message: 'Hello from React Native',
        createdAt: new Date().toISOString(),
      };

      await saveDataToBackend(payload);
      setStatus('Saved to backend successfully');
    } catch (error) {
      setStatus('Failed to save data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subtitle}>
        This screen sends data to your backend to be saved in the database.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Send to Backend</Text>
      </TouchableOpacity>

      {status ? <Text style={styles.status}>{status}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4b5563',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  status: {
    marginTop: 16,
    fontSize: 14,
    color: '#111827',
  },
});


