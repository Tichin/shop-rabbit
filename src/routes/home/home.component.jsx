import React from 'react';
import Directory from '../../components/directory/directory.component';
import { categories } from '../../data';

export default function Home() {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
}
