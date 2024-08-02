
import SideBarComponent from '@/components/sidebar';

export default function Home({children = []}) {
  return (
    <div className="h-screen flex flex-row justify-start">

      
      {/* <Navbar /> */}
      <SideBarComponent />
      <div className="bg-primary flex-1 p-4 text-white">
          {children}
      </div>
    </div>
  );
}
