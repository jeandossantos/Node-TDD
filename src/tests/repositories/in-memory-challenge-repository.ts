import { ChallengeRepository } from '../../application/repositories/ChallengeRepository';
import { Challenge } from '../../domain/entities/challenge';

export class InMemoryChallengeRepository implements ChallengeRepository {
  public items: Challenge[] = [];

  async findById(challengeId: string): Promise<Challenge> {
    const challenge = this.items.find((item) => item.id === challengeId);

    if (!challenge) {
      return null;
    }

    return challenge;
  }
}
