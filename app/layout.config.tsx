import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/public/logo.svg';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
      title: (
          <>
              {<Image
                  alt="KickstartFX Logo"
                  src={Logo}
                  className="w-[20px] md:w-[22px] block"
                  aria-label="KickstartFX"
              />}
              <span className="font-medium text-[15px]">
          KickstartFX Docs
        </span>
          </>
      ),
    enabled: true
  },
  githubUrl: 'https://github.com/xpipe-io/kickstartfx',
};
