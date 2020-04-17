// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm'
import Transaction from '../models/Transaction'
import TransactionRepository from '../repositories/TransactionsRepository'

interface Request {
  title: string
  value: number
  type: 'income' | 'outcome'
}

class CreateTransactionService {
  public async execute({ title, value, type }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository)

    const checkOperationPermission = await transactionRepository.getOperationPermission(
      value,
      type,
    )

    if (checkOperationPermission) {
      throw new Error('Usuário não tem saldo para realizar essa operação')
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
    })

    await transactionRepository.save(transaction)

    return transaction
  }
}

export default CreateTransactionService
