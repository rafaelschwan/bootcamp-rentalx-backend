import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DayjsProvider } from './DateProvider/implementations/DayjsDateProvider';

container.registerSingleton<IDateProvider>('DayjsProvider', DayjsProvider);
