import { Challenge } from '../../domain/entities/challenge';
import { Student } from '../../domain/entities/student';
import { InMemoryChallengeRepository } from '../../tests/repositories/in-memory-challenge-repository';
import { InMemoryStudentRepository } from '../../tests/repositories/in-memory-student-repository';
import { CreateChallengeSubmission } from './create-challenge-submission';

describe('Create challenge submission use case', () => {
  it('should be able to create a new submission', async () => {
    const studentRepository = new InMemoryStudentRepository();
    const challengeRepository = new InMemoryChallengeRepository();

    const student = Student.create({
      name: 'Diego',
      email: 'diego3g@gmail.com',
    });

    const challenge = Challenge.create({
      title: 'Challenge - 01',
      instructionsUrl: 'http://challenge.com',
    });

    studentRepository.items.push(student);
    challengeRepository.items.push(challenge);

    const sut = new CreateChallengeSubmission(
      studentRepository,
      challengeRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
