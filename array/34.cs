public class Solution {
    public int[] SearchRange(int[] nums, int target) {
        int left = 0;
        int right = nums.Length - 1;
        
        int resultLeft = -1;
        int resultRight = -1;
        
        // find lower bound
        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target)
            {
                resultLeft = mid;
                right = mid - 1;
            }
            else if (nums[left] <= target && target < nums[mid])
            {
                right = mid - 1;
            }
            else
            {
                left = mid + 1;
            }
        }
        
        left = 0;
        right = nums.Length - 1;
        // find upper bound
        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target)
            {
                resultRight = mid;
                left = mid + 1;
            }
            else if (nums[left] <= target && target < nums[mid])
            {
                right = mid - 1;
            }
            else
            {
                left = mid + 1;
            }
        }
        
        int[] result = new int[] {resultLeft, resultRight};
        return result;
    }
}