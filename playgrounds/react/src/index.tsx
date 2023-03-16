import React from 'react'
import ReactDOM from 'react-dom/client';

import { Button } from '@ds.e/react';
import "@ds.e/scss/lib/Button.css"

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Button label='Example Button' />)