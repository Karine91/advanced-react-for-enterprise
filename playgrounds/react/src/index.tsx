import React from 'react'
import ReactDOM from 'react-dom/client';

import { Select } from '@gkarine/react';
import "@gkarine/scss/lib/Utilities.css";
import "@gkarine/scss/lib/Text.css";
import "@gkarine/scss/lib/global.css";
import "@gkarine/scss/lib/Margin.css";
import "@gkarine/scss/lib/Select.css"

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
<div style={{ padding: '40px'}}>
  <Select options={options} />
</div>);

