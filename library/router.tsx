import { useContext, useEffect, useCallback, useState } from 'react'
import type { Transition } from 'history'
export type Tx = Transition & { retry: () => void }

import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom'

/**
 * These hooks re-implement the now removed useBlocker and usePrompt hooks in 'react-router-dom'.
 * Thanks for the idea @piecyk https://github.com/remix-run/react-router/issues/8139#issuecomment-953816315
 * And https://github.com/remix-run/react-router/issues/8139#issuecomment-1099082256
 * Source: https://github.com/remix-run/react-router/commit/256cad70d3fd4500b1abcfea66f3ee622fb90874#diff-b60f1a2d4276b2a605c05e19816634111de2e8a4186fe9dd7de8e344b65ed4d3L344-L381
 */
/**
 * Blocks all navigation attempts. This is useful for preventing the page from
 * changing until some condition is met, like saving form data.
 *
 * @param  blocker
 * @param  when
 * @see https://reactrouter.com/api/useBlocker
 */
export function useBlocker(blocker: Tx | undefined, when = true) {
  const { navigator } = useContext(NavigationContext)
  useEffect(() => {
    if (!when) return
    const unblock = navigator.block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          // Automatically unblock the transition so it can play all the way
          // through before retrying it. TODO: Figure out how to re-enable
          // this block if the transition is cancelled for some reason.
          unblock()
          tx.retry()
        },
      }
      blocker(autoUnblockingTx)
    })
    return unblock
  }, [navigator, blocker, when])
}
