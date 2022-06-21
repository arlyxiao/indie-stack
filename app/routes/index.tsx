import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import styled from "styled-components";

const Box = styled("div")`
  color: red;
`;

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white">


<div className="container mx-auto">
  <div className="flex items-center justify-between py-6 lg:py-10">
    <a href="/" className="flex items-center">
 
      <p className="font-body text-2xl font-bold text-primary dark:text-white">
        Mindoc
      </p>
    </a>
  


     <ul className="flex items-center">
                {user ? (
                  <li className="group relative mr-6 mb-1">
                  <Link
                    to="/notes"
                    className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                  >
                    View Notes for {user.email}
                  </Link>
                  </li>
                ) : (
                  <>
                  
<li className="group relative mr-6 mb-1">                    
<Link
                      to="/join"
                      className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                    >
                      注册
                    </Link>
                    </li>
                    <li className="group relative mr-6 mb-1"> 
                    <Link
                      to="/login"
                      className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
                    >
                      登录
                    </Link>
                    </li>
                  </>
                )}
              </ul>

              </div>
</div>
    </main>
  );
}
