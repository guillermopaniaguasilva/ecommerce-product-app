import type { Meta, StoryObj } from '@storybook/react';
import ProductThumbnail from '.';
// @ts-expect-error TS doesn't recognize images paths in StoryBook
import thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import { Product } from '../../types/index';

const meta = {
  title: 'UI Library/Product Thumbnail',
  component: ProductThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductThumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

const product: Product = {
  title: 'Product Title',
  description: 'Product Description',
  unitPrice: 100,
  images: ['', ''],
  thumbnail: thumbnail,
};

export const Default: Story = {
  args: {
    quantity: 1,
    product,
    onDelete: () => alert('Deleting item from cart!!!'),
  },
};
