import { Button } from './components/ui/button';
import { Spinner } from './components/ui/spinner';

export default function App() {
  const variants = [
    'default',
    'secondary',
    'destructive',
    'outline',
    'ghost',
    'link',
  ];
  const sizes = ['sm', '', 'lg'];
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-20">
      {sizes.map(size => (
        <div
          key={size}
          className="bg-gray-200 flex flex-col gap-10 p-10 rounded"
        >
          <div className="flex gap-4">
            {variants.map(variant => (
              <Button key={variant} size={size} variant={variant}>
                Button
              </Button>
            ))}
          </div>
          <div className="flex gap-4">
            {variants.map(variant => (
              <Button key={variant} disabled size={size} variant={variant}>
                Button
              </Button>
            ))}
          </div>
          <div className="flex gap-4">
            {variants.map(variant => (
              <Button key={variant} disabled size={size} variant={variant}>
                <Spinner />
                Button
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
