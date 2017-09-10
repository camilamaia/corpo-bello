import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';

import CorpoBello from './corpo-bello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CorpoBello />, document.getElementById('root'));
registerServiceWorker();
