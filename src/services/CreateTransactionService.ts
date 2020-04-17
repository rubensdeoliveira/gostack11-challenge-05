import { getCustomRepository } from 'typeorm'
import Transaction from '../models/Transaction'
import TransactionRepository from '../repositories/TransactionsRepository'
import CategoryRepository from '../repositories/CategoriesRepository'

import AppError from '../errors/AppError'

interface Request {
  title: string
  value: number
  type: 'income' | 'outcome'
  category: string
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository)
    const categoryRepository = getCustomRepository(CategoryRepository)

    const checkOperationPermission = await transactionRepository.getOperationPermission(
      value,
      type,
    )

    if (!checkOperationPermission) {
      throw new AppError('Usuário não tem saldo para realizar essa operação')
    }

    let categoryObj = await categoryRepository.getCategory(category)

    if (!categoryObj) {
      const newCategory = categoryRepository.create({
        title: category,
      })

      categoryObj = await categoryRepository.save(newCategory)
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id: categoryObj.id,
    })

    await transactionRepository.save(transaction)

    return transaction
  }
}

export default CreateTransactionService
