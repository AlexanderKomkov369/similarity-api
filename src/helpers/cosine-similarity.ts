export function cosineSimilarity(A: number[], B: number[]) {
  let dotproduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  for (let i = 0; i < A.length; i++) {
    dotproduct += A[i] * B[i];
    magnitudeA += A[i] * A[i];
    magnitudeB += B[i] * B[i];
  }
  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);
  // value = 0 → 1
  const similarity = dotproduct / (magnitudeA * magnitudeB);

  return similarity;
}
