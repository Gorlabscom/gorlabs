import * as p from '@clack/prompts';
import { Command } from 'commander';
import ora from 'ora';

const spinner = ora({
  text: 'Loading...',
  color: 'yellow',
});

export const example = new Command()
  .name('example')
  .description('An example command')
  .action(async () => {
    await run();
  });

export async function run() {
  p.intro('cli@0.0.0');
  p.note('Yay my awesome cli project', `Let's Rock 🚀`);

  const questions = await p.group(
    {
      name: () =>
        p.text({
          message: 'Your name?',
          defaultValue: 'Gaurav',
        }),
      language: () => {
        return p.select({
          message: 'Which do you prefer?',
          options: [
            { value: 'goku', label: 'Goku' },
            { value: 'vegeta', label: 'Vegeta' },
          ],
          initialValue: 'goku',
        });
      },
    },
    {
      onCancel() {
        process.exit(1);
      },
    }
  );

  spinner.start();
  await new Promise((res) => setTimeout(res, 2000));
  spinner.succeed(`Successfully ${questions.name}!`);
}
