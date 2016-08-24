require_relative '../queue'

RSpec.describe do

  before :each do
    @queue = Queue.new
  end

  describe '#new' do
    it "should take no arguments and return a stack object" do
      expect(@queue).to be_an_instance_of Queue
    end
  end

  describe '#add' do
    it "should add an element to a queue and return the element" do
      el = @queue.add(3)
      expect(el).to equal(3)
      el_again = @queue.add(4)
      expect(el_again).to equal(4)
    end
  end

  describe '#remove' do
    it 'should return the element from the front of the queue' do
      @queue.add(3)
      @queue.add(4)
      @queue.add(5)
      el = @queue.remove
      expect(el).to equal(3)
    end
    it 'should remove the element from the front of the queue' do
      @queue.add(3)
      @queue.add(4)
      @queue.add(5)
      @queue.remove
      el = @queue.remove
      expect(el).to equal(4)
    end
  end

  describe '#peek' do
    it 'should return the first item in the queue' do
      @queue.add(3)
      @queue.add(4)
      @queue.add(5)
      el = @queue.peek
      expect(el).to equal(3) 
    end
    it 'should not remove the element from the front of the queue' do
      @queue.add(3)
      @queue.add(4)
      @queue.add(5)
      @queue.peek
      el = @queue.peek
      expect(el).to equal(3)
    end
  end

end