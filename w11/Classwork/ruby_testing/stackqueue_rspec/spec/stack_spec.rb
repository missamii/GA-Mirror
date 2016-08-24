require_relative '../stack'

RSpec.describe Stack do
  before :each do
    @stack = Stack.new
  end

  describe '#new' do
    it "should take no arguments and return a stack object" do
      expect(@stack).to be_an_instance_of Stack
    end
  end

  describe '#add' do
    it "should add an element to its stack and return the same element" do
      el = @stack.add(3)
      expect(el).to equal(3);
    end
  end

  describe '#remove' do
    it 'should return and remove top element from the stack' do
      @stack.add(3)
      @stack.add(4)
      @stack.add(5)
      @stack.remove
      expect(@stack.remove).to equal(4)
    end
  end

  describe '#peek' do
    it 'should return and not remove top element from the stack' do
      @stack.add(3)
      @stack.add(4)
      @stack.add(5)
      expect(@stack.peek).to equal(5)
      expect(@stack.peek).to equal(5)
    end
  end
end
