import { StudentRepository } from '../../application/repositories/StudentRepository';
import { Student } from '../../domain/entities/student';

export class InMemoryStudentRepository implements StudentRepository {
  public items: Student[] = [];

  async findById(studentId: string): Promise<Student> {
    const student = this.items.find((item) => item.id === studentId);

    if (!student) {
      return null;
    }

    return student;
  }
}
