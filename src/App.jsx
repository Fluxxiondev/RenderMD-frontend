import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main className='p-8'>
          <Button type="button" variant="destructive">
            Button
          </Button>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
