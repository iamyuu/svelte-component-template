import { action } from '@storybook/addon-actions';
import Component from '../src/Component.svelte';

export default {
  title: 'Component',
  component: Component
};

export const Text = () => ({
  Component: Component,
  props: { name: 'World' },
  on: { click: action('clicked') }
});

export const Emoji = () => ({
  Component: Component,
  props: { name: '😀 😎' },
  on: { click: action('clicked') }
});
