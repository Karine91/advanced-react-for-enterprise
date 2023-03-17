import React from 'react'
import ReactDOM from 'react-dom/client';

import { Color, Spacing } from '@ds.e/react';
import "@ds.e/scss/lib/Utilities.css";

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Color hexCode="#000" width={Spacing.sm} height={Spacing.sm} />);

