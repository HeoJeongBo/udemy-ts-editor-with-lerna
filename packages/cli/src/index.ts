import { program } from 'commander';

import { servcCommand } from './commands/serve';

program.addCommand(servcCommand);

program.parse(process.argv);
