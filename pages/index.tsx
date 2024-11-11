import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MainComponent } from '../components/MainComponent/MainComponent';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <MainComponent />
    </>
  );
}
