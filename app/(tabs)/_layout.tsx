import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#2e3e5c',
        },
        tabBarStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
        },
        tabBarActiveTintColor: '#2e3e5c',
        tabBarInactiveTintColor: '#8d9cb0',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hello World App',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

// Simple placeholder for the TabBarIcon component
function TabBarIcon(props: {
  name: string;
  color: string;
  size: number;
}) {
  // This is just a placeholder - in a real app, you would use an icon library
  return (
    <div style={{ width: props.size, height: props.size, backgroundColor: props.color, borderRadius: props.size/2 }} />
  );
}