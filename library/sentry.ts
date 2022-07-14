import * as Sentry from '@sentry/browser'
import { Span, Transaction } from '@sentry/types'
import { SentrySpan } from '~/types'

export const CatchExceptionSentry = (error: Error) => {
  Sentry.captureException(error)
}

export const CatchMessageSentry = (message: string) => {
  Sentry.captureMessage(message)
}

export const SetSentryScopeTags = (tags: any) => {
  Object.keys(tags).forEach((key) => {
    Sentry.setTag(key, tags[key])
  })
}

export const CreateCustomSentryTransaction = (name: string) => {
  const transaction = Sentry.startTransaction({ name })

  Sentry.getCurrentHub().configureScope((scope) => scope.setSpan(transaction))
  return transaction
}

export const CreateSentryTransationSpan = (transaction: Transaction, spanAttr: SentrySpan) => {
  const span = transaction.startChild({ ...spanAttr })
  return span
}

export const FinishSentryInstrumentation = (transaction: Transaction, span: Span) => {
  transaction.finish()
  span.finish()
}

export const SetUserSentry = (userName: string) => {
  Sentry.setUser({ userName })
}
